class HinhTron {
    constructor(banKinh) {
        this.PI = 3.14;
        this.dienTichHinhTron = () => {
            return this.banKinh * this.banKinh * this.PI;
        };
        this.ChuViHinhTron = () => {
            return this.banKinh * 2 * this.PI;
        };
        this.banKinh = banKinh;
    }
}
class HinhTru extends HinhTron {
    constructor(banKinh, chieuCao) {
        super(banKinh);
        this.dienTichXungQuanhHinhTru = () => {
            return 2 * this.PI * this.banKinh * this.chieuCao;
        };
        this.dienTichToanPhanHinhTru = () => {
            return (2 * this.PI * this.banKinh * this.banKinh) + (2 * this.PI * this.banKinh * this.chieuCao);
        };
        this.theTichHinhTru = () => {
            return this.PI * this.banKinh * this.banKinh * this.chieuCao;
        };
        this.chieuCao = chieuCao;
    }
}
var hinhTron1 = new HinhTron(10);
console.log(hinhTron1.dienTichHinhTron());
document.write(`${hinhTron1.ChuViHinhTron()} <br>`);
var hinhTru1 = new HinhTru(20, 15);
console.log(hinhTru1.dienTichToanPhanHinhTru());
console.log(hinhTru1.dienTichXungQuanhHinhTru());
document.write(`${hinhTru1.theTichHinhTru()}`);
alert(`Chiều cao hình trụ: ${hinhTru1.chieuCao}`);
