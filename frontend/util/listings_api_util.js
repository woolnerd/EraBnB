export const fetchListings = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        data: { query }
    })
);

export const fetchSearchListings = (query) => (
  $.ajax({
    method: "GET",
    url: "/api/listings",
    data: { query },
  })
)

export const fetchFlexListing = () => (
  $.ajax({
    method: "GET",
    url: "/api/flexible",
  })
)

export const fetchListing = listingId => (
    $.ajax({
        method: 'GET',
        url: `/api/listings/${listingId}`
    })
)

export const createListing = (formData) => (
  $.ajax({
    method: "POST",
    url: `/api/listings/`,
    data: formData,
    contentType: false, 
    processData: false
  })
)

export const updateListing = (formData, listingId) => (
  $.ajax({
    method: "PATCH",
    url: `/api/listings/${listingId}`,
    data: formData,
    contentType: false,
    processData: false,
  })
)

export const deleteListing = listingId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listingId}`,
    })
)

