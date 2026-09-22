const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const families = {
  film: {
    title: "Hot Melt Adhesive Film",
    description:
      "Choose by required activation behavior, heat resistance, softness and the end-use described below. Melt index values are reported at the stated test temperature.",
    columns: ["Melt index", "Softening point", "Hardness"],
    rows: [
      ["650", "Low-temperature / handicraft uses", "Fast crystallization; low-temperature use", "15-25 g/10 min", "80-90 C", "95 +/- 2A", "MI at 150 C"],
      ["7010", "Low-temperature adhesive film", "Low-temperature adhesive-film use", "8-12 g/10 min", "70-80 C", "95 +/- 2A", "MI at 150 C"],
      ["7040", "General adhesive film", "Universal adhesive-film use", "15-20 g/10 min", "110-120 C", "65 +/- 5A", "MI at 150 C"],
      ["7040A", "Heat-resistant adhesive film", "Heat-resistant adhesive-film use", "15-20 g/10 min", "120-130 C", "65 +/- 5A", "MI at 150 C"],
      ["7050", "General adhesive film", "Fast crystallization; universal adhesive-film use", "4-8 g/10 min", "115-125 C", "95 +/- 2A", "MI at 150 C"],
      ["7060", "Temperature-resistant adhesive film", "Fast crystallization; temperature resistance; universal adhesive-film use", "5-10 g/10 min", "130-140 C", "95 +/- 2A", "MI at 150 C"],
      ["7080A", "Soft hot-melt coating", "Soft material for hot-melt coating", "8-12 g/10 min", "120-130 C", "80 +/- 5A", "MI at 150 C"],
      ["7010D", "Low-temperature / medical-equipment-related applications", "Low temperature; extremely fast crystallization", "10-15 g/10 min", "80-90 C", "98 +/- 2A", "MI at 150 C"],
      ["803", "Flexible adhesive film", "Flexible adhesive-film use", "4-10 g/10 min", "125-135 C", "65 +/- 5A", "MI at 150 C"],
      ["902B", "Flexible adhesive film", "Flexible adhesive-film use", "4-8 g/10 min", "105-115 C", "65 +/- 5A", "MI at 150 C"],
      ["804", "High-temperature adhesive film", "Universal high-temperature film", "4-8 g/10 min", "140-150 C", "80 +/- 5A", "MI at 175 C"],
      ["806", "High-temperature adhesive film", "Excellent heat resistance", "4-8 g/10 min", "160-170 C", "80 +/- 5A", "MI at 190 C"],
      ["902", "Material modification", "Good hot-melt fluidity for material modification", "35-55 g/10 min", "90-100 C", "60 +/- 5A", "MI at 120 C"],
    ],
  },
  powder: {
    title: "Hot Melt Adhesive Powder",
    description:
      "These grades are presented as powder products. Mesh count indicates particle-size range; compare it with the specified application and the reported melt index.",
    columns: ["Mesh count", "Melt index", "Softening point"],
    rows: [
      ["650", "Shoe materials", "Powder grade listed for shoe materials", "50-160 mesh", "40-50 g/10 min", "70-80 C", "MI at 175 C"],
      ["7050", "Heat-transfer printing (TTO)", "Powder grade listed for heat-transfer printing (TTO)", "30-100 mesh", "5-10 g/10 min", "100-120 C", "MI at 175 C"],
      ["7080A", "Heat-transfer printing (TTO)", "Powder grade listed for heat-transfer printing (TTO)", "40-150 mesh", "10-30 g/10 min", "110-130 C", "MI at 175 C"],
    ],
  },
  ink: {
    title: "TPU for Ink Applications",
    description:
      "These grades are shown for screen-printing and spray-applied ink applications. Viscosity is reported for the solvent concentration stated in the brochure.",
    columns: ["Viscosity", "Softening point", "Hardness"],
    rows: [
      ["4020", "Screen-printing ink", "Low viscosity, low hardness and frost resistance", "15-25 mPa.s", "120-130 C", "70 +/- 10A", "15% MEK, 25 C"],
      ["4027", "Screen-printing ink", "Good frost resistance", "90-110 mPa.s", "115-125 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4030", "Spray-applied ink", "Low viscosity and good gloss", "10-15 mPa.s", "100-120 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4130", "Special ink", "Good gloss and anti-rebound behavior", "60-80 mPa.s", "120-130 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4036", "Spray-applied ink", "Low viscosity and anti-rebound behavior", "20-30 mPa.s", "110-120 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4037", "General ink use", "Anti-rebound and bend resistance", "60-100 mPa.s", "120-130 C", "70 +/- 5A", "15% MEK, 25 C"],
      ["4137", "Ink applications", "Good ester solubility; brochure wording: environmentally friendly ink", "140-180 mPa.s", "120-130 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4038", "Spray-applied ink", "High hardness and good gloss", "20-30 mPa.s", "130-140 C", "55 +/- 5D", "15% MEK, 25 C"],
      ["4138", "Spray-applied ink", "High hardness, good gloss and anti-rebound behavior", "20-30 mPa.s", "145-155 C", "75 +/- 5D", "15% MEK, 25 C"],
      ["4039", "Special ink", "High viscosity and good solubility", "100-130 mPa.s", "120-140 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4080", "Electronic sheath spray-applied ink", "Good ester solubility and resistance to twists and turns", "35-45 mPa.s", "110-120 C", "75 +/- 5A", "15% MEK, 25 C"],
      ["4085", "Ink applications", "High viscosity and good bending resistance", "30,000-40,000 mPa.s", "140-150 C", "83 +/- 2A", "30% CYC"],
      ["4090", "High-temperature-resistant ink", "High viscosity and good heat resistance", "4,000-6,000 mPa.s", "160-170 C", "83 +/- 2A", "15% CYC"],
      ["Aliphatic 4037B-3", "Non-yellowing ink", "Non-yellowing ink", "300-600 mPa.s", "80-100 C", "65 +/- 5A", "15% CYC"],
    ],
  },
  adhesive: {
    title: "Adhesive-grade TPU",
    description:
      "The brochure separates TPU for aromatic and aliphatic adhesive uses. Compare opening time, activation temperature, heat resistance and the application notes.",
    columns: ["Viscosity", "Opening / crystallization", "Activation / heat"],
    rows: [
      ["6015", "Shoe making / automotive interiors", "Fast crystallization, long opening time and resistance to plasticizers", "1,600-2,600 mPa.s", "30 min", "55 C / 55 C", "15% MEK, 25 C; aromatic"],
      ["6045H", "Footwear industry", "Slow crystallization, long opening time and good heat resistance", "800-1,200 mPa.s", "45 min", "50 C / 60 C", "15% MEK, 25 C; aromatic"],
      ["6215H", "Furniture lamination", "Fast crystallization and excellent resistance to plasticizers", "800-1,200 mPa.s", "20 min", "55 C / 55 C", "15% MEK, 25 C; aromatic"],
      ["6105", "PUR addition", "Fast crystallization", "80-120 mPa.s", "10 min", "55 C / 55 C", "15% MEK, 25 C; aromatic"],
      ["6315", "PUR addition / fabric bonding", "Very fast crystallization", "1,200-1,800 mPa.s", "5 min", "55 C / 55 C", "15% MEK, 25 C; aromatic"],
      ["6020P", "Bonding PVC materials", "Excellent resistance to plasticizers", "1,600-2,600 mPa.s", "50 min", "45 C / 60 C", "15% MEK, 25 C; aromatic"],
      ["7005B", "Shoe making / automotive interiors", "Fast crystallization, long opening time and resistance to plasticizers", "1,600-2,600 mPa.s", "30 min", "55 C / 55 C", "15% MEK, 25 C; aliphatic"],
      ["7015B", "Footwear industry", "Slow crystallization, long opening time and good heat resistance", "1,600-2,600 mPa.s", "35 min", "50 C / 60 C", "15% MEK, 25 C; aliphatic"],
      ["6005L", "Bonding PVC materials", "Long opening time and resistance to plasticizers", "600-1,200 mPa.s", "1 h", "35 C / 55 C", "15% MEK, 25 C; aliphatic"],
    ],
  },
};

const finder = document.querySelector("[data-product-finder]");
const finderOutput = finder.querySelector(".finder-output");

function renderFamily(familyKey) {
  const family = families[familyKey];
  const [property1, property2, property3] = family.columns;
  const rows = family.rows
    .map(
      ([grade, use, characteristic, value1, value2, value3, condition]) => `
        <tr>
          <td class="grade">${grade}</td>
          <td class="primary-use">${use}</td>
          <td class="key-characteristic">${characteristic}</td>
          <td>${value1}</td>
          <td>${value2}</td>
          <td>${value3}</td>
          <td class="test-condition">${condition}</td>
        </tr>`,
    )
    .join("");

  finderOutput.innerHTML = `
    <div class="finder-family-head">
      <h3>${family.title}</h3>
      <p>${family.description}</p>
    </div>
    <div class="finder-table-wrap">
      <table class="finder-table">
        <thead>
          <tr>
            <th scope="col">Grade</th>
            <th scope="col">Recommended for</th>
            <th scope="col">Key characteristic</th>
            <th scope="col">${property1}</th>
            <th scope="col">${property2}</th>
            <th scope="col">${property3}</th>
            <th scope="col">Test condition</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

finder.querySelectorAll("[data-family]").forEach((button) => {
  button.addEventListener("click", () => {
    finder.querySelectorAll("[data-family]").forEach((item) => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderFamily(button.dataset.family);
  });
});

renderFamily("film");
