export const GetKies = obj => {
    const keys = [];
    let name;
    // tslint:disable-next-line:forin
    for (name in obj) {
        keys.push(name);
    }
    return keys;
};
