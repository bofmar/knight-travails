import Icon from "../assets/github.svg"

export default function signature() {
  const sign = document.getElementById('signature');
  const img = new Image();
  img.src = Icon;
  sign.appendChild(img);
}
