'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    department: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          subject: '국민의짐 웹사이트 문의'
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('서버에서 잘못된 응답을 반환했습니다.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || '전송에 실패했습니다.');
      }

      setSubmitStatus('success');
      setFormData({
        department: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      alert('문의가 성공적으로 접수되었습니다.');

    } catch (error) {
      console.error('전송 오류:', error);
      setSubmitStatus('error');
      alert(`접수에 실패했습니다: ${error.message}`);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">개발자에게 연락하기</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">소속</label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) => setFormData({...formData, department: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">성함</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">문의내용</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg h-32"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? '전송 중...' : '문의하기'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-600 text-center mt-4">
            성공적으로 전송되었습니다. 메일 확인 후 빠른 답변 드리겠습니다.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center mt-4">
            전송에 실패했습니다. 다시 시도해주세요.
          </p>
        )}
      </form>
    </div>
  );
} 