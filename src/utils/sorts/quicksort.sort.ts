import { ONetSkillEntry } from '@/resources/onet/onet.interface';

interface TrackingObject {
    entry: ONetSkillEntry;
    data: number;
    indexOrignal: number;
}

class QuickSort {
    private map;
    private array: number[] = [];

    constructor() {
        this.map = new Map<number, TrackingObject>();
    }

    public sort(array: ONetSkillEntry[]) {
        for (let i = 0; i < array.length; i++) {
            const trackingObj: TrackingObject = {
                entry: array[i],
                data: array[i].data_value,
                indexOrignal: i,
            };
            this.map.set(i, trackingObj);
            this.array.push(array[i].data_value);
        }
        this.quickSort(this.array, 0, this.array.length - 1);
        let sorted = [];
        for (const [key, value] of this.map) {
            sorted.push(value.entry);
        }
        return sorted;
    }

    private quickSort(array: number[], left: number, right: number) {
        const len = array.length;
        let pivot;
        let partitionIndex;

        if (left < right) {
            pivot = right;
            partitionIndex = this.partition(array, pivot, left, right);

            this.quickSort(array, left, partitionIndex - 1);
            this.quickSort(array, partitionIndex + 1, right);
        }
        return array;
    }

    private partition(array: number[], pivot: number, left: number, right: number) {
        let pivotValue = array[pivot];
        let partitionIndex = left;

        for (let i = left; i < right; i++) {
            if (array[i] < pivotValue) {
                this.swap(array, i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(array, right, partitionIndex);
        return partitionIndex;
    }

    private swap(array: number[], firstIndex: number, secondIndex: number) {
        const firstEntry = this.map.get(firstIndex);
        const secondEntry = this.map.get(secondIndex);

        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;

        this.map.delete(firstIndex);
        this.map.delete(secondIndex);

        if (firstEntry && secondEntry) {
            this.map.set(secondIndex, firstEntry);
            this.map.set(firstIndex, secondEntry);
        }
    }
}

export default QuickSort;
