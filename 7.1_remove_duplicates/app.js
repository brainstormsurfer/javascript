    const removeDuplicates = (numbers) => {
        let tempStr = ''
        let noDupliNumsArr = []

        for (const num of numbers) {
            if (tempStr.indexOf(num) === -1) {
                tempStr += num + ','
                noDupliNumsArr.push(num)
            }
        }
        return noDupliNumsArr
    }

    console.log(removeDuplicates([3,4,4,3,6,3]));