import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);

  try {
    client.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: "us21",
    });

    const response = await client.lists.batchListMembers("a22cc45e2d", {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: "CE User",
            LNAME: "CE User",
          },
        },
      ],
    });

    console.log(response);

    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error!");
  }
}
