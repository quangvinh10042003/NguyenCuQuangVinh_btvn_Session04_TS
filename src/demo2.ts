class HinhTron {
    public banKinh: number;
    protected PI: number = 3.14;

    constructor(banKinh: number) {
        this.banKinh = banKinh;
    }

    dienTichHinhTron = (): number => {
        return this.banKinh * this.banKinh * this.PI;
    }
    ChuViHinhTron = (): number => {
        return this.banKinh * 2 * this.PI;
    }
}
class HinhTru extends HinhTron {
    public chieuCao: number;

    constructor(banKinh: number, chieuCao: number) {
        super(banKinh);
        this.chieuCao = chieuCao;
    }
    dienTichXungQuanhHinhTru = ():number => {
        return 2 * this.PI * this.banKinh * this.chieuCao;
    }
    dienTichToanPhanHinhTru = (): number => {
        return (2 * this.PI * this.banKinh * this.banKinh) + (2 * this.PI * this.banKinh * this.chieuCao);
    }
    theTichHinhTru = ():number => {
        return this.PI*this.banKinh*this.banKinh*this.chieuCao;
    }
}
var hinhTron1 = new HinhTron(10);
console.log(hinhTron1.dienTichHinhTron());
document.write(`${hinhTron1.ChuViHinhTron()} <br>`);

var hinhTru1 = new HinhTru(20,15);
console.log(hinhTru1.dienTichToanPhanHinhTru());
console.log(hinhTru1.dienTichXungQuanhHinhTru());
document.write(`${hinhTru1.theTichHinhTru()}`);
alert(`Chiều cao hình trụ: ${hinhTru1.chieuCao}`);