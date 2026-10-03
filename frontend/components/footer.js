import { el } from "../assets/js/dom.js";

export function Footer() {
  return el("footer", {}, [
    "គេហទំព័រនេះបង្កើតឡើងសម្រាប់ការសិក្សា ហើយអាចមានកំហុស។ ប្រសិនបើអ្នកឃើញកំហុស សូមប្រាប់អ្នកគ្រប់គ្រង (admin) ដើម្បីកែតម្រូវ៖ ",
    el("a", { href: "mailto:techbyzee002@gmail.com", text: "ទាក់ទងអ្នកគ្រប់គ្រង" }),
  ]);
}