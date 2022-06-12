function delay(delayInMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, delayInMs);
    });
}

let isOn = false;

const streamMockData = async onTick => {
    while (isOn) {
        await delay(25);
        let orderBook = {
            Buy: [
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },

                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },

                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                }
            ],
            Sell: [
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },

                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },
                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                },

                {
                    Price: Math.random(),
                    Amount: Math.random(),
                    Total: Math.random()
                }
            ]
        };

        if (onTick) {
            onTick(orderBook);
        }
    }
};

export async function registerToStream(onTick) {
    if (!isOn) {
        startStream();
        streamMockData(onTick);
    }
}

export const startStream = () => {
    isOn = true;
};

export const stopStream = () => {
    isOn = false;
};
