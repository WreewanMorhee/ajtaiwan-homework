export const dummy_num = list => {
  if (window.innerWidth <= 768) {
    return list.length % 2
  }

  if (window.innerWidth <= 1080 && window.innerWidth > 768) {
    return 3 - (list.length % 3)
  }
}
