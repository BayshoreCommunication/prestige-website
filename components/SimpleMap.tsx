export default function SimpleMap() {
    return (
        <section className="bg-prestige-black">
            <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-8">
            <div className="w-full h-[250px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    title="Prestige Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17754.158690673357!2d-82.59357723385655!3d27.99782858868767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e9f11615f23f%3A0x3a8eaa4691b1725a!2s8313%20W%20Hillsborough%20Ave%20Ste%20330%2C%20Tampa%2C%20FL%2033615%2C%20USA!5e0!3m2!1sen!2sbd!4v1758010610582!5m2!1sen!2sbd"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
        </section>
    );
}
