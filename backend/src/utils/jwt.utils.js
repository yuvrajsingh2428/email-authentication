const jwt = require("jsonwebtoken");

class JWTService {
    
    // Use the JWT secret from environment variables or default to a hardcoded value
    static jwt_auth = process.env.JWT_AUTH || "&%*&((*&&^GV*&&*";

    // Method to generate a token
    static generateToken = async (payload) => {
        try {
            // Use jwt.sign() to create a JWT token
            const token = await jwt.sign(payload, JWTService.jwt_auth, {
                expiresIn: '30d' // Token will expire in 30 days
            });

            return token;
        } catch (error) {
            console.error("Error generating token:", error);
            throw new Error("Token generation failed");
        }
    }

    // Method to verify the token and extract a specific key from the payload
    static verifyToken = async (token, key) => {
        try {
            // Verify the token and extract the payload
            const payload = await jwt.verify(token, JWTService.jwt_auth);

            // Return the specific key from the payload if it exists
            return payload[key];
        } catch (error) {
            console.error("Error verifying token:", error);
            throw new Error("Token verification failed");
        }
    }
}

module.exports = JWTService;
