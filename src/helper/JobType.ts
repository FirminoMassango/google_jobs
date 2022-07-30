
    export interface SearchMetadata {
        id: string;
        status: string;
        json_endpoint: string;
        created_at: string;
        processed_at: string;
        google_jobs_url: string;
        raw_html_file: string;
        total_time_taken: number;
    }

    export interface SearchParameters {
        q: string;
        engine: string;
        google_domain: string;
    }

    export interface DetectedExtensions {
        posted_at: string;
        schedule_type: string;
    }

    export interface JobsResult {
        title: string;
        company_name: string;
        location: string;
        via: string;
        description: string;
        thumbnail: string;
        extensions: string[];
        detected_extensions: DetectedExtensions;
        job_id: string;
    }

    export interface Option {
        text: string;
        value: string;
    }

    export interface Chip {
        type: string;
        param: string;
        options: Option[];
    }

    export interface RootObject {
        search_metadata: SearchMetadata;
        search_parameters: SearchParameters;
        jobs_results: JobsResult[];
        chips: Chip[];
    }
