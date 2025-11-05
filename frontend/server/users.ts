"use server";

export const get = async () => {
    const data = await fetch (`${process.env.NEXT_PUBLIC_APP_URL}/users`);
    const json = await data.json();
    return json.data;
    console.log(json);
};