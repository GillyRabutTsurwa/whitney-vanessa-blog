export const useFormatDate = () => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formatDate = (currentDate: string) => {
        return new Date(currentDate).toLocaleDateString("en-GB", options);
    };

    return {
        formatDate: formatDate,
    };
};
