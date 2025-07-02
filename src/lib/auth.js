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
  avatarUrl: null
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