class Model {
    user: string;
    list: WhishItem[];

    constructor() {
        this.user = "Den";
        this.list = [new WhishItem("1 000 000 USD", false),
            new WhishItem("TypeScript", false),
            new WhishItem("Angular", false),
            new WhishItem("JavaScript", true)
        ];
    }
}

class WhishItem {
    item: string;
    status: boolean;

    constructor(item: string, status: boolean) {
        this.item = item;
        this.status = status;
    }
}

export {WhishItem, Model}