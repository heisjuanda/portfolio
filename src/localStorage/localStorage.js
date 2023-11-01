const DB_STORE_NAME = "loading";

function addLoader() {
  const loading = JSON.parse(localStorage.getItem(DB_STORE_NAME)) || [];

  const loader = {
    loading: true,
  };

  loading.push(loader);
  localStorage.setItem(DB_STORE_NAME, JSON.stringify(loading));
}

function deleteLoading() {
  localStorage.removeItem(DB_STORE_NAME);
}

function updateLoadingStatus(newLoadingStatus) {
  const loading = JSON.parse(localStorage.getItem(DB_STORE_NAME)) || [];

  if (loading.length > 0) {
    loading[0].loading = newLoadingStatus;
    localStorage.setItem(DB_STORE_NAME, JSON.stringify(loading));
  }
}

function getLoading() {
  const loading = JSON.parse(localStorage.getItem(DB_STORE_NAME)) || [];
  const firstLoader = loading[0];

  if (firstLoader) {
    return firstLoader.loading;
  }

  return true;
}

window.addEventListener("beforeunload", deleteLoading);

export { addLoader, deleteLoading, getLoading, updateLoadingStatus };