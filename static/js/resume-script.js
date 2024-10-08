// Modularize your resume content here
const resumeContent = `
    <div class="right">



        <div class="section">
            <h2 class="header">Work Experience</h2>
            <div class="subsection">
                <div class="subheader">Tiger Analytics, <span class="designation">Remote</span></div>
                <p class="date"><em>Data Engineer</em> <span class="float-right">Jan 2023 - Present</span></p>
                <ul class="itemize">
<li><strong>Built a single enterprise-wide unified data repository</strong> by unifying 10 Petabytes of data
requirements from numerous products, re-developing to standardize the development process using
an on-prem Python-based framework, by individually contributing and leading a team of 7 Data
Engineers as a Data Engineering Lead.</li>

                    <li><strong>Reduced Databricks compute resources cost by 50%</strong> by optimizing a Spark job to process
7.5 TB of data in a single run, through detailed analysis of data transformations, Spark submit
configurations, data spills, partition sizes, and worker utilization.</li>
                    <li><strong>Achieved 40% reduction in job computes cost of 35 daily Spark jobs</strong> responsible for ingest-
ing incremental loads by reviewing SLA & re-developing to remove skewness in data by rewriting
the partitioner & optimizing Spark configurations, through detailed understanding of data.</li>
                    <li><strong>Reduced re-development needs by 90% and minimized operational costs</strong> by developing a
metadata-driven, object-oriented PySpark API-based Data Ingestion framework and pairing it with
Azure DevOps CI/CD pipelines to automate and keep metadata always in control of client.</li>
                   




                </ul>
            </div>
            <div class="subsection">
                <div class="subheader">Tech Mahindra, <span class="designation">Sydney, Australia</span></div>
                <p class="date"><em>Data Engineer</em> <span class="float-right">Jan 2021 - Jan 2023</span></p>
                <ul class="itemize">
                    <li><strong>Achieved a 95% improvement in estimating Estimated Time of Arrival (ETA)</strong> by de-
livering a decision support system to technicians that enabled relocation based on forecasted ticket
numbers, through the deployment, and prediction of a Machine Learning model on Kubeflow.</li>
                    <li><strong>Ingested billions of customer transactions</strong> by leveraging Cloudera Hortonworks Spark Archi-
tecture to process and manage large-scale data efficiently.</li>
                    <li><strong>Led the establishment of 3+ ML CI/CD pipelines</strong> on AWS using Kubernetes, Jenkins,
and GitHub, resulting in improved deployment processes and increased productivity for the team.</li>
                    <li><strong>Conducted comprehensive training sessions for 60 employees</strong> on SQL Analytics, data modeling
techniques, and building scalable data pipelines using PySpark and Apache Airflow.</li>
                
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="header">Skills</h2>
            <ul class="itemize">
                <li><strong>Transactional DBMS:</strong> Microsoft SQL Server, MySQL, PostgreSQL</li>
                <li><strong>Distributed Storage System:</strong> ADLS, Amazon S3</li>
                <li><strong>Big Data Processing & Streaming:</strong> Apache Spark, Apache Kafka</li>
                <li><strong>Data Orchestration:</strong> Apache Airflow, Azure Data Factory</li>
                <li><strong>Data Processing:</strong> Python, PySpark API, SparkSQL API, Pandas, SpaCy, NLP</li>
                <li><strong>Data Warehousing:</strong> Snowflake, BigQuery, Redshift</li>
                <li><strong>Machine Learning:</strong> Scikit-learn, TensorFlow, Keras, Seaborn, Matplotlib, NumPy, SciPy</li>
                <li><strong>DevOps:</strong> Azure DevOps, Splunk, Kubernetes, Kubeflow, Jenkins, JFrog, Docker, GIT</li>
            </ul>
        </div>



        

        <div class="section">
            <h2 class="header">Education</h2>
            <ul class="itemize">
                <li><strong>Liverpool John Moores University</strong> <span class="float-right">Liverpool, UK</span><br>
                Master of Science in Machine Learning & AI <span class="float-right">Graduation Date: Sep 2025</span></li>
                <li><strong>Gautam Buddha University</strong> <span class="float-right">Greater Noida, UP</span><br>
                Bachelor of Technology in Information Technology <span class="float-right">Graduation Date: Jul 2021</span></li>
            </ul>
        </div>

        <div class="section">
            <h2 class="header">Achievements</h2>
            <ul class="itemize">
                <li><strong>Tech Mahindra</strong> / Bravo Award - Project Delivery <span class="float-right">Jun 2021 & Mar 2022</span></li>
                <li><strong>Tech Mahindra</strong> / Pat On The Back Award - Trained 50+ new employees <span class="float-right">Dec 2021</span></li>
            </ul>
        </div>

        <div class="section">
            <h2 class="header">Certifications</h2>
            <ul class="itemize">
                <li><strong>Microsoft</strong> / Azure Data Scientist Associate, DP-100 Exam <span class="float-right">Jun 2022</span></li>
                <li><strong>Microsoft</strong> / Azure Data Engineer Associate, DP-203 Exam <span class="float-right">Jun 2022</span></li>
            </ul>
        </div>

        <div class="section">
            <h2 class="header">Project Experience</h2>
            <div class="subsection">
                <h3 class="subheader">Tiger Analytics <span class="designation">Remote</span></h3>
                <ul class="itemize">
                    <li><strong>Common Data Foundation</strong> <span class="float-right">Jan 2024 - Present</span>
                        <ul class="itemize">
                            <li>Developed & migrated unified foundation layer for Retail data coming from various source systems.</li>
                            <li>Lead for delivery of data sources migration from Databricks to on-prem frameworks.</li>
                            <li>Developed Python frameworks for data quality checks, PII encryption, and data transformation from raw to trusted and feature layers.</li>
                            <li><em>Tech Stack:</em> Azure Databricks, Python IDE-based Development, API, Azure DataFactory, Azure DevOps CI/CD, Databricks, Logic Apps, Log Analytics</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="subsection">
                <h3 class="subheader">Tech Mahindra <span class="designation">Sydney, Australia</span></h3>
                <ul class="itemize">
                    <li><strong>DQR-DAC Ingestion System</strong> <span class="float-right">June 2022 - Jan 2023</span>
                        <ul class="itemize">
                            <li>Implemented a workflow to determine customers' eligibility for migration to new strategic plans.</li>
                            <li>Developed & maintained data ingestion layer, audit & configuration layer, Hadoop layer for seamless operational needs as per GDPR compliance.</li>
                            <li>Transformed 25+ data sources using Scala as per business & operational requirements.</li>
                            <li>Provided operational support in detecting any discrepancy in 25+ data sources.</li>
                            <li><em>Tech Stack:</em> Hadoop, Scala, Hive, Delta Tables, Linux, Zeppelin, Ambari, Jira, Confluence</li>
                        </ul>
                    </li><br>
                    <li><strong>Pharma Insights Data Extraction & Analytics</strong> <span class="float-right">Apr 2022 - May 2022</span>
                        <ul class="itemize">
                            <li>Created ADF pipeline to fetch data from S3 to ADLS, using ELTL approach.</li>
                            <li>Written Pyspark script in Azure Databricks to extract text from images.</li>
                            <li>Categorized data retrieved into JSON objects, loaded into ADLS.</li>
                            <li>Provided analytics insight report using Azure Databricks & presented it to clients.</li>
                            <li><em>Tech Stack:</em> SQL, Python, PySpark, Azure Data Factory, Data Bricks, Data Lake, Key Vault</li>
                        </ul>
                    </li><br>
                    <li><strong>Decision Support For Technician Allocation</strong> <span class="float-right">Aug 2021 - Mar 2021</span>
                        <ul class="itemize">
                            <li>Improved end-to-end service processes & cut down manual deployment by 75% by predicting proper utilization of technicians and minimizing customer wait time for best customer experience by generating 3000 recommendations per day, in near real-time, to mitigate the risk of the day.</li>
                            <li>Deployed 5+ container-based applications orchestrated with Kubernetes.</li>
                            <li>Established 2+ CI/CD pipelines of ML models on AWS.</li>
                            <li>Written 40+ highly optimized SQL stored procedures to transform/aggregate raw data, API integrations to fetch live data.</li>
                            <li><em>Tech Stack:</em> Python, SQL, ML, CI/CD, AWS, Kubernetes, JFrog, Jenkins, Kubeflow</li>
                        </ul>
                    </li><br>
                    <li><strong>Control Tower Intrusion Detection Analytics</strong> <span class="float-right">Jan 2021 - July 2021</span>
                        <ul class="itemize">
                            <li>Worked closely with stakeholders, BA, & scrum masters to gather the business requirements.</li>
                            <li>Extracted complex Fields from different types of Log files using Regular Expressions in Databricks.</li>
                            <li>Exploratory data analysis to analyze security anomalies from server's generated data.</li>
                            <li>Wrote and optimized simple and complex SQL queries to load information extracted into Splunk datasets as per business needs.</li>
                            <li><em>Tech Stack:</em> Azure Databricks, Azure Datafactory, CI/CD, Spark SQL, PySpark, Data Lake, Delta Tables</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>


`;

document.getElementById('resume-content').innerHTML = resumeContent;
