export const sortByDate = async (array) => {
    const data = array.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return data;
}

export const sortByOrderId = async (array) => {
    const data = array.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return a.orderId - b.orderId;
    });
    return data;
}