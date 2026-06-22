// options.js

// Sample data for destinations and car hires
const optionsData = {
    destinations: {
        destination1: { name: "5 Days Nairobi Airport - Masai Mara - Nairobi Airport" },
        destination2: { name: "8 DAYS NAIROBI AIRPORT - MASAI MARA - L.NAKURU - SAMBURU - AIRPORT" },
        destination3: { name: "3 DAYS AMBOSELI" },
        destination4: { name: "3 DAYS MASAI MARA" },
        destination5: { name: "4 DAYS AMBOSELI / TSAVO WEST" },
        destination6: { name: "4 DAYS MASAI MARA / L. NAKURU" },
        destination7: { name: "5 DAYS MASAI MARA / L. NAKURU" },
        destination8: { name: "6 DAYS MASAI MARA / L.NAKURU / L.BOGORIA / L.BARINGO" },
        destination9: { name: "7 DAYS MASAI MARA / L.NAKURU / SAMBURU" },
        destination10: { name: "15 DAYS BEST OF KENYA" },
        destination11: { name: "11 DAYS GRAND KENYA" },
        destination12: { name: "NARO-MORU ROUTE 5 DAYS" },
        destination13: { name: "SIRIMON ROUTE 5 DAYS" },
        destination14: { name: "UP SIRIMON - DOWN CHOGORIA 5 DAYS" },
        destination15: { name: "MARANGU ROUTE 7 DAYS" },
        destination16: { name: "UMBWE ROUTE. 8 DAYS" },
        destination17: { name: "MACHAME ROUTE 6 DAYS" },
        destination18: { name: "3 DAYS NGORONGORO / L.MANYARA" },
        destination19: { name: "4 DAYS MANYARA / NGORONGORO / TARANGIRE" },
        destination20: { name: "6 DAYS NGORONGORO / SERENGETI / MANYARA" },
        destination21: { name: "AIR SAFARIS" }
    },
    carHires: {
        car1: { name: "Fielder" },
        car2: { name: "Corolla" },
        car3: { name: "RAV-4" },
        car4: { name: "X-Trail" },
        car5: { name: "Prado" },
        car6: { name: "Landcruiser V8" },
        car7: { name: "Safari Van" },
        car8: { name: "Safari Landcruiser" },
        car9: { name: "Mercedes Benz - Bus" },
        car10: { name: "Toyota - Coaster" },
        car11: { name: "Family Car" }
    }
};

// Function to load the inquiry options
function loadInquiryOptions() {
    const inquirySelect = document.getElementById("inquirySelect");
    
    // Clear existing options
    inquirySelect.innerHTML = '<option value="">Select...</option>';
    
    // Add destinations to the select
    for (const key in optionsData.destinations) {
        const opt = document.createElement("option");
        opt.value = key; // Use the key as value
        opt.textContent = optionsData.destinations[key].name; // Use the name
        inquirySelect.appendChild(opt);
    }

    // Add car hires to the select
    for (const key in optionsData.carHires) {
        const opt = document.createElement("option");
        opt.value = key; // Use the key as value
        opt.textContent = optionsData.carHires[key].name; // Use the name
        inquirySelect.appendChild(opt);
    }
}

// Call the function when the page loads
window.onload = loadInquiryOptions;