import { searchGitHubUsers } from '../core/github/github-client.js';

const keywordsInput = ref('');
const pageInput = ref(1);
const debouncedKeywordsInput = refDebounced(keywordsInput, 800);
const debouncedPageInput = refDebounced(pageInput, 800);

const searchRequest = ref({
  q: debouncedKeywordsInput,
  perPage: 10,
  page: debouncedPageInput
});

const searchResults = ref<SearchApiResponse<GitHubUser>>();
const searchHistory = ref<Array<string>>([]);

watchEffect(async () => {
  /**
   * shame =/ this watch effect is a bit messy and doing many things, there's probably a better way to do this...
   */
  if (searchRequest.value.q !== '') {
    searchResults.value = await searchGitHubUsers(searchRequest.value);

    const index = searchHistory.value.findIndex((x) => x == searchRequest.value.q);

    if (index !== -1) {
      searchHistory.value.splice(index, 1);
    }

    searchHistory.value.unshift(searchRequest.value.q);
    keywordsInput.value = searchRequest.value.q;
  }

  if (pageInput.value !== searchRequest.value.page) {
    pageInput.value = searchRequest.value.page;
  }
});

const totalPages = computed(() => {
  if (searchResults.value) {
    return Math.ceil(searchResults.value.totalCount / searchRequest.value.perPage);
  }

  return 0;
});

const lowerBoundRecordNumber = computed(() => {
  return searchRequest.value.perPage * searchRequest.value.page - searchRequest.value.perPage + 1;
});

/**
 * this is sketchy
 */
const upperBoundRecordNumber = computed(() => {
  const recordCount = searchResults?.value?.totalCount ?? 0;

  if (recordCount === 0) {
    return 0;
  }

  let upperCounter: number = lowerBoundRecordNumber.value + searchRequest.value.perPage - 1;

  if (upperCounter > recordCount) {
    upperCounter = recordCount;
  }

  return upperCounter;
});

export function useGitHubSearch() {
  return {
    keywordsInput,
    pageInput,
    totalPages,
    searchRequest,
    searchResults,
    lowerBoundRecordNumber,
    upperBoundRecordNumber,
    searchHistory
  };
}
