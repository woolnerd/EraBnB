export const fetchListings = (query) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        data: { query }
    })
);

export const fetchListing = listingId => (
    $.ajax({
        method: 'GET',
        url: `/api/listings/${listingId}`
    })
)


export const createListing = (formData) =>
  $.ajax({
    method: "POST",
    url: `/api/listings/`,
    data: formData,
    contentType: false, 
    processData: false
  });

export const updateListing = listing => (
    $.ajax({
        method: 'PATCH',
        url: `/api/listings/${listing.id}`,
        data: { listing }
    })
)

export const deleteListing = listingId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/listings/${listingId}`,
    })
)

