import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string(),
    },
    handler:async(ctx,args)=>{
        //jezeli uzytkownik istnieje

        const user=await ctx.db.query('users')
        .filter((q)=>q.eq(q.field('email'),args.email))
        .collect();

        //jezeli nie to stworz nowego uzytkownika
        if (user?.length == 0) {
            const result = await ctx.db.insert('users', {
                name: args.name,
                email: args.email,
                picture: args.picture,
                credits: 3
            })

            return result;

        }
        return user[0];
    }

})