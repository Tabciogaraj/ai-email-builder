const { defineSchema, defineTable } = require("convex/server")
const { v } = require("convex/values")

export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        picture:v.string(),
        credits:v.number(),
    })
})