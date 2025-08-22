# USB Charge Battery Library

A lightweight, data-driven web catalog of USB-chargeable battery cells and modules.  
Built by Bocaletto Luca, this project separates content (JSON) from presentation (HTML/CSS/JS) for easy maintenance and extensibility.

## Repository Structure

```
usb-charge-battery/
├── index.html
├── data/
│   └── sections.json
├── js/
│   └── main.js
├── css/
│   └── styles.css
└── README.md
```

## Features

- Fetches battery specs from `data/sections.json`  
- Renders semantic HTML with a specs table and key-features list  
- Responsive, mobile-first CSS  
- Graceful fallback when JavaScript is disabled  
- Modular code: update JSON or styles without touching core logic  

## Getting Started

1. Clone the repo  
   ```
   git clone https://github.com/bocaletto-luca/usb-charge-battery.git
   cd usb-charge-battery
   ```

2. Serve locally  
   - Using VS Code Live Server  
   - Or with Python:  
     ```
     python3 -m http.server 8000
     ```
   - Then open `http://localhost:8000` in your browser.

3. Browse the catalog  
   - Each section is anchored by its battery ID (`#nimh-1s`, `#li-ion-3s`, etc.)  
   - Clickable images and tables for quick reference  

## Customization

- **Add or edit batteries**  
  Modify `data/sections.json`—each object maps to one section.

- **Styling**  
  Tweak `css/styles.css` or introduce your own theme file.

- **Rendering logic**  
  Update `js/main.js` to change how specs are displayed (e.g., Markdown, modals, sorting).

## Roadmap Ideas

- Client-side search/filter UI  
- Dark mode toggle  
- Markdown support for rich descriptions  
- PWA support for offline viewing  
- CI flow: auto-deploy GitHub Pages on push  

## Contributing

1. Fork this repository  
2. Create a feature branch (`git checkout -b feat/your-idea`)  
3. Commit your changes (`git commit -m "feat: add …"`)  
4. Push to your branch (`git push origin feat/your-idea`)  
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://opensource.org/licenses/MIT) for details.

---

<p align="center">
  ⭐️ If you find this project useful, give it a star on <a href="https://github.com/bocaletto-luca/usb-charge-battery" target="_blank">GitHub</a>!
</p>
