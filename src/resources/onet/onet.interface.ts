interface ONetSkillEntry {
    onet_soc_code: string;
    element_id: string;
    element_name: string;
    scale_id: string;
    data_value: number;
    n: number;
    standard_error: number;
    lower_ci_bound: number;
    upper_ci_bound: number;
    recommend_suppress: string;
    not_relevant: string;
    date: string;
    domain_source: string;
}

export { ONetSkillEntry };
