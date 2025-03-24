document.addEventListener("DOMContentLoaded", () => {
    const productTableBody = document.getElementById("productTableBody");
    const addProductBtn = document.getElementById("addProduct");

    let produklist = [
        { id: 1, nama: "Laptop", harga: 12000000 },
        { id: 2, nama: "Smartphone", harga: 5000000 },
        { id: 3, nama: "Tablet", harga: 7000000 },
        { id: 4, nama: "Smartwatch", harga: 2000000 },
        { id: 5, nama: "Headphone", harga: 1500000 },
        { id: 6, nama: "Mouse", harga: 500000 },
        { id: 7, nama: "Keyboard", harga: 800000 },
        { id: 8, nama: "Monitor", harga: 3000000 },
        { id: 9, nama: "Printer", harga: 2500000 },
        { id: 10, nama: "Speaker", harga: 1200000 },
        { id: 11, nama: "Webcam", harga: 1000000 },
        { id: 12, nama: "Microphone", harga: 850000 },
        { id: 13, nama: "External HDD", harga: 2000000 },
        { id: 14, nama: "Flash Drive", harga: 300000 },
        { id: 15, nama: "Router", harga: 1500000 }
    ];

    function tampilkanProduk() {
        productTableBody.innerHTML = "";
        produklist.sort((a, b) => a.id - b.id); 

        produklist.forEach(({ id, nama, harga }) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${id}</td>
                <td>${nama}</td>
                <td>Rp ${harga.toLocaleString()}</td>
                <td><button class="delete-btn" data-id="${id}">❌</button></td>
            `;
            productTableBody.appendChild(row);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", (event) => {
                const id = parseInt(event.target.getAttribute("data-id"));
                if (confirm(`⚠️ Yakin ingin menghapus produk ID ${id}?`)) {
                    hapusProduk(id);
                }
            });
        });
    }

    function tambahProduk(id, nama, harga) {
        if (produklist.some((produk) => produk.id === id)) {
            alert(`❌ ID ${id} sudah digunakan! Gunakan ID lain.`);
            return;
        }

        produklist.push({ id, nama, harga });
        tampilkanProduk();
    }

    function hapusProduk(id) {
        produklist = produklist.filter(p => p.id !== id);
        tampilkanProduk();
    }

    addProductBtn.addEventListener("click", () => {
        const id = parseInt(document.getElementById("productId").value);
        const nama = document.getElementById("productName").value.trim();
        const harga = parseInt(document.getElementById("productPrice").value);

        if (!id || !nama || !harga) {
            alert("⚠️ Mohon isi semua data!");
            return;
        }

        tambahProduk(id, nama, harga);
        
        document.getElementById("productId").value = "";
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
    });

    tampilkanProduk();
});
