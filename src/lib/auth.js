import supabase from "./supabase";

export async function signUpUser (email, password, username="") {

    
let data = await supabase.auth.signUp({
  email: email,
  password: password
})

if(data?.user) {
  const {data : sessionData } = await supabase.auth.getSession()

  if (!sessionData?.session){
    console.log("No active session yet - profile will be created on first Sign In ")
    return data;
  }


const displayName = username || email.split('@')[0];

// create profile
const { data: profileData, error: profileError } = await supabase.from('users')
.insert({
  id: data.user.id,
  username: displayName,
  avatar_url: null
})

.select()
.single()

if(profileError) {
  console.error("profile creation error:", profileError);
}else{
  console.log("profile created successfully", profileData);
}

}
return data

}


export async function signInUser (email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  console.log("User info", data)
  if(error) throw error;

  // check if user profile exists, create if it doesn't exists

  if(data?.user) {
    try{

      const profile = await getUserProfile(data.user.id);
      console.log("profile info", profile)

    }catch(profileError){
      console.error('Error with profile during sign in:', profileError);
    }
  }
}

export async function getUserProfile(userId) {
  const { data : sessionData } = await supabase.auth.getSession()

  const {data : userData, error } = await supabase.from('users')

  .select("*")
  .eq('id', userId)
  .single()

  if(error && error.code === "PGRST116") {
    // user not found
    console.log("No profile found, attempting to create one for user:", userId);

    // get user email to drive username if needed

    const email = userData?.user.email;
    const defaultUsername = email ? email.split('@')[0] : `user_${Date.now()}`;


    // create profile
    const {data: newProfile, error: profileError} = await supabase.from('users')
    .insert({
      id: userId,
      username: defaultUsername,
      avatar_url: null
    })
    .select()
    .single()

    if(profileError) {
    console.error("Profile Creation error:", profileError);
    throw profileError
  }else{
    console.log("Profile created successfully", newProfile)
  }

  return newProfile
  }


  if(error) {
    console.log("Error fetching user profile:", error);
    throw error
  }

  console.log("existing profile")
  return sessionData

  
}