export const optimizeCollectionObjects = (array: any) => {
  return array.map((item: any) => ({
    id: item.id,
    title: item.title,
    name: item.user.name,
    urls: { thumb: item.cover_photo.urls.thumb, full: item.cover_photo.urls.full },
  }));
};
