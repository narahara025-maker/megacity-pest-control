// =========================================
// MEGACITY PEST CONTROL SERVICES
// SUPABASE DATABASE CONNECTION
// =========================================


// -----------------------------------------
// SUPABASE SETTINGS
// -----------------------------------------

const SUPABASE_URL =
    "https://uzqbaqelqhrwftbagiol.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_VWtr2uNbYePwMWu2e2JtTQ_Xwncvdk_";


// -----------------------------------------
// FORM
// -----------------------------------------

const enquiryForm =
    document.getElementById("enquiryForm");

const formMessage =
    document.getElementById("formMessage");


// -----------------------------------------
// SUBMIT ENQUIRY
// -----------------------------------------

if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            // Get form values

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const area =
                document.getElementById("area").value.trim();

            const message =
                document.getElementById("message").value.trim();


            // Basic validation

            if (!name || !phone) {

                formMessage.textContent =
                    "Please enter your name and phone number.";

                formMessage.style.color = "red";

                return;
            }


            // Disable button while submitting

            const submitButton =
                enquiryForm.querySelector(
                    ".submit-btn"
                );

            submitButton.disabled = true;

            submitButton.textContent =
                "Submitting...";


            formMessage.textContent =
                "";


            try {

                // Send data to Supabase

                const response =
                    await fetch(
                        SUPABASE_URL +
                        "/rest/v1/customer_enquiries",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "apikey":
                                    SUPABASE_KEY,

                                "Authorization":
                                    "Bearer " +
                                    SUPABASE_KEY,

                                "Prefer":
                                    "return=minimal"
                            },

                            body: JSON.stringify({

                                name: name,

                                phone: phone,

                                service: service,

                                area: area,

                                message: message

                            })

                        }
                    );


                // Check response

                if (!response.ok) {

                    const errorText =
                        await response.text();

                    console.error(
                        "Supabase error:",
                        errorText
                    );

                    throw new Error(
                        "Unable to save enquiry."
                    );
                }


                // Success

                formMessage.textContent =
                    "✅ Thank you! Your enquiry has been submitted successfully.";

                formMessage.style.color =
                    "#075e3b";


                // Clear the form

                enquiryForm.reset();


            } catch (error) {

                console.error(error);


                formMessage.textContent =
                    "❌ Something went wrong. Please try again or contact us by phone/WhatsApp.";

                formMessage.style.color =
                    "red";

            }


            // Enable button again

            submitButton.disabled = false;

            submitButton.textContent =
                "Submit Enquiry";

        }
    );

}


// -----------------------------------------
// WEBSITE LOADED
// -----------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Megacity Pest Control website loaded."
        );

    }
);