interface FilterInitialState {
  status: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isError: null | object;
}

export const filtersInitialState: FilterInitialState = {
  status: 'all',
  isLoading: 'idle',
  isError: null,
};
