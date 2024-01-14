pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/sujeetrudra0608/nodejs_demo.git', branch: 'main' 
            }
        }
        
    }
}
