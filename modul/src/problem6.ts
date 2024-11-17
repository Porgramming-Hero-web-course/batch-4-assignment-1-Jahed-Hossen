{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile=<T>(profile: T, updates: Partial<T>)=> {
        return { ...profile, ...updates };
    }
    
   
    const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    const UpdateProfiles=updateProfile(myProfile, { age: 26 })
    console.log(UpdateProfiles);
    

}