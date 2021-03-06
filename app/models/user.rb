
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true

    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password


    def self.find_by_credentials_email(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    # def set_activation_token
        
    # end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!

        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def generate_unique_session_token
        token = SecureRandom::urlsafe_base64(16)

        while self.class.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64(16)
        end

        token
    end

    # def generate_unique_activation_token
        
    # end

    # def activate!
        
    # end
end