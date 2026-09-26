async function submitEnquiry() {

    // 1. Get customer details
    const customerData = {
        name: name,
        mobile: mobile,
        email: email,
        area: area,
        address: address,
        pest: pest,
        property: property,
        service_date: date,
        service_time: time,
        message: message
    };

    // 2. FIRST save to Supabase
    const { data, error } = await supabase
        .from("enquiries")
        .insert([customerData])
        .select();

    // 3. If Supabase fails, STOP
    if (error) {
        alert("Unable to save your enquiry. Please try again.");
        console.error(error);
        return;
    }

    // 4. Only after successful Supabase save
    //    open WhatsApp
    window.open(whatsappURL, "_blank");
}
