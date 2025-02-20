const nodemailer = require("nodemailer");

export default async function POST(req, res) {
    try {
        const { name, email, phone,pageUrl } = await req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ""
            }
        })

        const mailOptions = {
            from: '',
            to: '',
            subject: `New Lead Generated By BookWritingExperts`,
            html: `<table>
                
                    <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>

                    <tr>
                        <th>Phone</th>
                        <td>${phone}</td>
                    </tr>
                    <tr>
                        <th>pageUrl</th>
                        <td>${pageUrl}</td>
                    </tr>


                  
                
                  
            </table>`
        }

        await transporter.sendMail(mailOptions);


      

        return res.json({ "message": "Email send sucessfully", "data": [name, email, phone,pageUrl], "status": 200 });
    } catch (error) {
        return res.json({ "message": "Failed to send Email", "data": error, "status": 500 });
    }
}