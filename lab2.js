const ONE_HUNDRED_PERCENT= 100;
let bankName = prompt('Nhap ten ngan hang');
let bankPercent = prompt('Nhap lai suat');

let year = prompt('Nhap so nam');
let money = prompt('Nhap so tien');



let moneyInYear = money * (bankPercent / ONE_HUNDRED_PERCENT);

let interestMoney = year * moneyInYear;

let total = money + interestMoney;

let message = `
<pre>
<h1>Ung dung tinh lai suat cua ngan hang: ${bankName}</h1>
So Nam Gui: ${year}
Lai suat:${bankPercent} %
Sau ${year} nam so tien lai la: ${interestMoney}
So tien goc va lai sau ${year} nam: ${total}
</pre>
`;

document.write(message);