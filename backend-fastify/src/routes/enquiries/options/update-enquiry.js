import { enquiryProperties } from "./schema.js";

export const updateEnquiryOpts = (handler) => ({
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          status: {
            type: "number",
            default: 201,
          },
          message: {
            type: "string",
            default: "Success: Enquiry updated!",
          },
          data: enquiryProperties,
        },
      },
    },
  },
  handler,
});
