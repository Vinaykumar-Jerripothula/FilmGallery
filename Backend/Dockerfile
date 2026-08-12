FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw package -DskipTests

EXPOSE 8081

CMD ["java","-jar","target/Backend-0.0.1-SNAPSHOT.jar"]