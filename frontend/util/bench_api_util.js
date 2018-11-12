export const fetchBenches = (filters) => {
  return $.ajax({
    method: "GET",
    url: `/api/benches/`,
    data: filters,
    error: (err) => console.log(err)
  });
};

export const fetchBench = id => {
  return $.ajax({
    method: "GET",
    url: `/api/benches/${id}`,
    error: (err) => console.log(err)
  });
};
