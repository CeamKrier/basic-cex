function delay(delayInMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, delayInMs);
    });
}

async function streamService(callBackFunc) {
    while (true) {
        let delayres = await delay(25);
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
        console.log(orderBook);
        if (callBackFunc) {
            callBackFunc(orderBook);
        }
    }
}

streamService();
