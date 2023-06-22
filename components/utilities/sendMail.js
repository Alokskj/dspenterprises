import EmailTemplateReview from "./EmailTemplateReview";


export default function sendMail(formState, setFormState){
    const config = {
        Username : 'Ravi.chaudhary@dspenterprises.net',
        Password : `${process.env.NODEMAILER_PASSWORD}`,
        Host : 'smtp.elasticemail.com',
        Port : '2525',
        From : 'Ravi.chaudhary@dspenterprises.net',
        Subject : 'New review has been recieved',
        Body : EmailTemplateReview(formState),
        To : 'Ravi.chaudhary@dspenterprises.net'
    }

    const submitHander = () =>{
        if(window.Email){
            window.Email.send(config)
            .then(
                message => { setFormState({
                    userName : '',
                    email : '',
                    message : '',
                    rating : 1
                })}
              )
            .catch(error => console.log(error));
        }
        else{
            console.log('email client is not avaibale')
        }
    }  
    submitHander()
}
    