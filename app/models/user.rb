class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :birthdate, :password_digest, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :birthdate, date: {before: Proc.new {Date.today - 18.year}}
    attr_reader :password 

    after_initialize :ensure_session_token

    has_many :bookings,
    foreign_key: :booker_id,
    class_name: :Booking,
    dependent: :destroy

    has_many :listings,
    foreign_key: :host_id,
    class_name: :Listing,
    dependent: :destroy

    has_many :reviews,    
    foreign_key: :author_id,
    class_name: :Review,
    dependent: :destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?
        user.is_password?(password) ? user : nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

    
end
