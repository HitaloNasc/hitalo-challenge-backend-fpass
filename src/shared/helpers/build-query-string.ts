export const buildQueryString = (params: any) => {
    const query = new URLSearchParams();

    const arrEntries = Object.entries(params);

    arrEntries.forEach(([key, value]) => {
        if (value) {
            query.append(key, String(value));
        }
    });

    return query.toString();
};
