#!/usr/bin/env node

/**
 * ポートフォリオデータ更新スクリプト
 * 使用方法: node scripts/update-data.js
 */

const fs = require('fs');
const path = require('path');

// データファイルのパス
const PROFILE_PATH = path.join(__dirname, '../src/data/profile.json');
const PORTFOLIO_PATH = path.join(__dirname, '../src/data/portfolio.json');

function updateProfile() {
	console.log('📝 個人情報を更新中...');

	const profile = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf8'));

	// ここでプロフィール情報の更新ロジックを追加
	console.log('✅ 個人情報の更新が完了しました');

	return profile;
}

function updatePortfolio() {
	console.log('💼 ポートフォリオを更新中...');

	const portfolio = JSON.parse(fs.readFileSync(PORTFOLIO_PATH, 'utf8'));

	// ここでポートフォリオ情報の更新ロジックを追加
	console.log('✅ ポートフォリオの更新が完了しました');

	return portfolio;
}

function main() {
	console.log('🚀 データ更新スクリプトを開始します...\n');

	try {
		updateProfile();
		updatePortfolio();

		console.log('\n🎉 全てのデータ更新が完了しました！');
		console.log('💡 変更を確認するには、開発サーバーをリロードしてください。');
	} catch (error) {
		console.error('❌ エラーが発生しました:', error.message);
		process.exit(1);
	}
}

if (require.main === module) {
	main();
}
