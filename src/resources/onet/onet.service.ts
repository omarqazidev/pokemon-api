import { readFileSync } from 'fs';
import { ONetSkillEntry } from '@/resources/onet/onet.interface';
import QuickSort from '@/utils/sorts/quicksort.sort';

class ONetService {
    public async fetchData(): Promise<ONetSkillEntry[]> {
        try {
            const skillData = await this.readDataFromFile('/skills.txt');
            const entries = this.textToEnteries(skillData);
            return entries;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to fetch onset data');
        }
    }

    public async sortData(): Promise<ONetSkillEntry[]> {
        try {
            const entries = await this.fetchData();
            //const sortedEntries = this.sortSkillEntries(entries);
            const sortedEntries = this.quicksort(entries);
            return sortedEntries;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to read and sort onet data');
        }
    }

    private async readDataFromFile(filenameInRoot: string): Promise<string> {
        try {
            const path = process.cwd();
            const buffer = readFileSync(path + filenameInRoot);
            return buffer.toString();
        } catch (error) {
            console.error(error);
            throw new Error('Unable to read data');
        }
    }

    private textToEnteries(text: string): ONetSkillEntry[] {
        const rows = text.split('\r\n');
        const entries: ONetSkillEntry[] = [];

        for (let i = 1; i < rows.length; i++) {
            const column = rows[i].split('\t');

            const skillEntry: ONetSkillEntry = {
                onet_soc_code: column[0],
                element_id: column[1],
                element_name: column[2],
                scale_id: column[3],
                data_value: parseFloat(column[4]),
                n: parseFloat(column[5]),
                standard_error: parseFloat(column[6]),
                lower_ci_bound: parseFloat(column[7]),
                upper_ci_bound: parseFloat(column[8]),
                recommend_suppress: column[9],
                not_relevant: column[10],
                date: column[11],
                domain_source: column[12],
            };

            entries.push(skillEntry);
        }
        return entries;
    }

    private sortSkillEntries(entries: ONetSkillEntry[]) {
        return entries.sort((a, b) => a.data_value - b.data_value);
    }

    private quicksort(entries: ONetSkillEntry[]) {
        const quicksort = new QuickSort();
        const sorted = quicksort.sort(entries);
        return sorted;
    }
}

export default ONetService;
