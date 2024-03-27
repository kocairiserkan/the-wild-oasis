import supabase from "./supabase";

export async function signup({fullName, email, password}) {
    const { data, error } = await supabase.auth.signUp({
        email, 
        password, 
        options : {
            data : {
                fullName,
                avatar: '',
            },
        },
    });

    if(error) throw new Error(error.message);

    return data;
}


export async function login({email, password}){
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if(error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const {data: session} = await supabase.auth.getSession(); // check if there is a session

    if(!session.session) return null; 

    const {data, error} = await supabase.auth.getUser(); 

    if(error) throw new Error(error.message);

    return data?.user; //only want to return user itself
}

export async function logout() {
    const {error} = await supabase.auth.signOut();
    if(error) throw new Error(error.message);
}