const utilitiesCaches = [
  "zuri-utilities-getuserinfo",
  "zuri-utilities-getworkspaceuser",
  "zuri-utilities-getworkspaceusers"
];

/**
 * @param {string} cacheName name of the cache to be cleared
 * @returns {Promise<boolean>} returns true if the cache was cleared
 *
 * @description - clears the cache from the browser with the given name
 */
export const deleteUtilitiesCache = async (
  cacheName: string
): Promise<boolean> => {
  return await caches.delete(cacheName);
};

/**
 * @returns {Promise<boolean>} returns true if the cache was cleared
 *
 * @description clears all the caches from the browser
 */
export const deleteAllUtilitiesCache = async (): Promise<boolean> => {
  const cacheNames = await caches.keys();

  const cacheNamesToDelete = cacheNames.filter(cacheName =>
    utilitiesCaches.includes(cacheName)
  );

  await Promise.all(
    cacheNamesToDelete.map(cacheName => caches.delete(cacheName))
  );

  return true;
};

/**
 * @deprecated
 * @param {string} pageTitle page name
 * @returns {boolean} returns true after the page title is set
 *
 * @description - include a title for the page in the browser
 *
 * @example - setPageTitle("music") ==> "zuri | music | {organization name}"
 */
export const setPageTitle = (pageTitle: string) => {
  document.title = `Zuri | ${pageTitle} | ${
    localStorage.getItem("orgName") || ""
  }`;
  return true;
};
